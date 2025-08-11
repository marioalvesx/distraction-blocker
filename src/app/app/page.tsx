"use client";

import React, { useEffect, useRef, useState } from "react";
import PomodoroTimer from "@/components/pomodoro-timer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  ClipboardIcon,
  ColumnsIcon,
  CheckCircledIcon,
  TimerIcon,
  FileTextIcon,
  SpeakerLoudIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import bg from "@/assets/beautiful-office-space-cartoon-style.jpg";

type Point = { x: number; y: number };
type Task = { id: string; text: string; completed: boolean };

interface FloatingWindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  position: Point;
  onPositionChange: (p: Point) => void;
  children: React.ReactNode;
}

const FloatingWindow: React.FC<FloatingWindowProps> = ({
  title,
  isOpen,
  onClose,
  position,
  onPositionChange,
  children,
}) => {
  const draggingRef = useRef<{ start: Point; origin: Point } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - draggingRef.current.start.x;
      const dy = e.clientY - draggingRef.current.start.y;
      onPositionChange({
        x: Math.max(8, draggingRef.current.origin.x + dx),
        y: Math.max(8, draggingRef.current.origin.y + dy),
      });
    };
    const handleMouseUp = () => {
      draggingRef.current = null;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    if (draggingRef.current) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [onPositionChange]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-[60]"
      style={{ left: position.x, top: position.y, width: 420 }}
    >
      <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl text-white shadow-2xl">
        <div
          className="flex items-center justify-between px-4 py-2 cursor-move select-none rounded-t-2xl"
          onMouseDown={(e) => {
            draggingRef.current = {
              start: { x: e.clientX, y: e.clientY },
              origin: { x: position.x, y: position.y },
            };
          }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          </div>
          <div className="text-sm font-medium opacity-90">{title}</div>
          <button
            onClick={onClose}
            className="text-xs rounded-md px-2 py-1 hover:bg-white/10"
          >
            Close
          </button>
        </div>
        <div className="px-4 pb-4 pt-2">{children}</div>
      </div>
    </div>
  );
};

const TasksWindow: React.FC<{
  tasks: Task[];
  onAdd: (text: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}> = ({ tasks, onAdd, onToggle, onEdit, onDelete }) => {
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
        />
        <Button
          onClick={() => {
            const text = input.trim();
            if (text) {
              onAdd(text);
              setInput("");
            }
          }}
          className="bg-white/10 hover:bg-white/20 text-white"
        >
          Add
        </Button>
      </div>

      <div className="space-y-2 max-h-72 overflow-auto pr-1">
        {tasks.length === 0 && (
          <div className="text-sm text-white/60">No tasks yet.</div>
        )}
        {tasks.map((t) => (
          <div
            key={t.id}
            className="group flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => onToggle(t.id)}
                className="h-4 w-4 accent-white"
              />
              {editingId === t.id ? (
                <Input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onEdit(t.id, editingText.trim());
                      setEditingId(null);
                    }
                    if (e.key === "Escape") {
                      setEditingId(null);
                    }
                  }}
                  className="bg-transparent border-white/10 text-white"
                  autoFocus
                />
              ) : (
                <span
                  className={`text-sm ${
                    t.completed ? "line-through opacity-60" : "opacity-90"
                  }`}
                >
                  {t.text}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              {editingId === t.id ? (
                <Button
                  size="sm"
                  className="h-7 bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => {
                    onEdit(t.id, editingText.trim());
                    setEditingId(null);
                  }}
                >
                  Save
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="h-7 bg-white/10 hover:bg-white/20 text-white"
                  onClick={() => {
                    setEditingId(t.id);
                    setEditingText(t.text);
                  }}
                >
                  Edit
                </Button>
              )}
              <Button
                size="sm"
                variant="destructive"
                className="h-7 bg-red-500/80 hover:bg-red-500 text-white"
                onClick={() => onDelete(t.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NotesWindow: React.FC<{
  value: string;
  onChange: (v: string) => void;
  onSave: () => void;
}> = ({ value, onChange, onSave }) => {
  return (
    <div className="space-y-3">
      <Textarea
        rows={10}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your notes..."
        className="min-h-48 bg-white/5 border-white/10 text-white placeholder:text-white/50"
      />
      <div className="flex justify-end">
        <Button
          onClick={onSave}
          className="bg-white/10 hover:bg-white/20 text-white"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

const AppPage = () => {
  const [isTasksOpen, setIsTasksOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [notes, setNotes] = useState<string>("");

  const [tasksPos, setTasksPos] = useState<Point>({ x: 24, y: 120 });
  const [notesPos, setNotesPos] = useState<Point>({ x: 480, y: 140 });
  const [timerPos, setTimerPos] = useState<Point>({ x: 260, y: 220 });

  useEffect(() => {
    try {
      const tRaw = localStorage.getItem("fh_tasks");
      const nRaw = localStorage.getItem("fh_notes");
      if (tRaw) setTasks(JSON.parse(tRaw));
      if (nRaw) setNotes(nRaw);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("fh_tasks", JSON.stringify(tasks));
    } catch {}
  }, [tasks]);
  useEffect(() => {
    try {
      localStorage.setItem("fh_notes", notes);
    } catch {}
  }, [notes]);

  const addTask = (text: string) =>
    setTasks((prev) => [
      { id: crypto.randomUUID(), text, completed: false },
      ...prev,
    ]);
  const toggleTask = (id: string) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  const editTask = (id: string, text: string) => {
    if (!text) return;
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));
  };
  const deleteTask = (id: string) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  return (
    <div
      className="dark min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Floating Windows */}
      <FloatingWindow
        title="Tasks"
        isOpen={isTasksOpen}
        onClose={() => setIsTasksOpen(false)}
        position={tasksPos}
        onPositionChange={setTasksPos}
      >
        <TasksWindow
          tasks={tasks}
          onAdd={addTask}
          onToggle={toggleTask}
          onEdit={editTask}
          onDelete={deleteTask}
        />
      </FloatingWindow>

      <FloatingWindow
        title="Notes"
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        position={notesPos}
        onPositionChange={setNotesPos}
      >
        <NotesWindow value={notes} onChange={setNotes} onSave={() => {}} />
      </FloatingWindow>

      <FloatingWindow
        title="Focus Timer"
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
        position={timerPos}
        onPositionChange={setTimerPos}
      >
        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
          <PomodoroTimer />
        </div>
      </FloatingWindow>

      {/* Bottom Taskbar */}
      <TooltipProvider>
        <div className="fixed inset-x-0 bottom-4 z-[55] flex items-center justify-center">
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-2 rounded-2xl border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-xl">
            {/* Left group */}
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-xl bg-white/10 text-white hover:bg-white/20"
                    onClick={() => setIsTasksOpen((v) => !v)}
                  >
                    <ClipboardIcon className="mr-2 h-4 w-4" /> Tasks
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Tasks</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-xl bg-white/5 text-white hover:bg-white/15"
                  >
                    <ColumnsIcon className="mr-2 h-4 w-4" /> Kanban
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Kanban (coming soon)</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-xl bg-white/5 text-white hover:bg-white/15"
                  >
                    <CheckCircledIcon className="mr-2 h-4 w-4" /> Habit Tracker
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Habit Tracker (coming soon)</TooltipContent>
              </Tooltip>
            </div>

            {/* Center group */}
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-xl bg-white/10 text-white hover:bg-white/20"
                    onClick={() => setIsTimerOpen((v) => !v)}
                  >
                    <TimerIcon className="mr-2 h-4 w-4" /> Focus Timer
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Pomodoro Focus Timer</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-xl bg-white/10 text-white hover:bg-white/20"
                    onClick={() => setIsNotesOpen((v) => !v)}
                  >
                    <FileTextIcon className="mr-2 h-4 w-4" /> Notes
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notes</TooltipContent>
              </Tooltip>
            </div>

            {/* Right group */}
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-xl bg-white/5 text-white hover:bg-white/15"
                  >
                    <SpeakerLoudIcon className="mr-2 h-4 w-4" /> Ambient Sounds
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Ambient Sounds (coming soon)</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-xl bg-white/5 text-white hover:bg-white/15"
                  >
                    <GearIcon className="mr-2 h-4 w-4" /> Settings
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Settings (coming soon)</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default AppPage;

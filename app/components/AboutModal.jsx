// components/AboutModal.js
"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";

export default function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={() => setIsOpen(true)} className="text-sm">
          About this page
        </Button>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg rounded-xl bg-white dark:bg-gray-900 p-6 shadow-xl">
            <Dialog.Title className="text-xl font-bold mb-2">About Emotion Explorer</Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              A project designed for Girls Who Code
            </Dialog.Description>
            <div className="space-y-4 text-sm text-gray-800 dark:text-gray-100">
              <p>
                Emotion Explorer is an interactive AI project designed for students in 3rd–12th grade to
                help them explore, identify, and reflect on their emotions using technology.
              </p>
              <p>
                🛠 <strong>How to use:</strong><br />
                <strong>Step 1:</strong> Write a sentence about how you feel.<br />
                <strong>Step 2:</strong> Click "Classify Emotion" to see how the AI understands your mood.<br />
                <strong>Step 3:</strong> Click "Generate AI Story" to hear a short, encouraging story based on your emotion.
              </p>
              <p>
                💡 <strong>Motivation:</strong> Many students grow up without the tools to name or express their
                emotions. This app gives them a space to be heard, to reflect, and to realize that their
                feelings matter. When young people learn to process emotions, they also learn how to transform
                their inner experiences into action — building empathy, strength, and a better community around them.
              </p>
            </div>
            <div className="mt-6 text-right">
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

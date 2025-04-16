// "use client";
// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";
// import { Sparkles } from "lucide-react";
// import AboutModal from "./AboutModal";

// export default function EmotionClassifier() {
//   const [text, setText] = useState("");
//   const [emotion, setEmotion] = useState("");
//   const [story, setStory] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleClassify = async () => {
//     setLoading(true);
//     setEmotion("");
//     setStory("");

//     try {
//       const res = await fetch("http://localhost:3001/api/emotion", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text }),
//       });

//       const data = await res.json();

//       if (res.ok && data.emotion) {
//         setEmotion(data.emotion);
//       } else {
//         setEmotion("unknown");
//       }
//     } catch (err) {
//       console.error("API error:", err);
//       setEmotion("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGenerateStory = async () => {
//     setLoading(true);
//     setStory("");

//     try {
//       const res = await fetch("http://localhost:3001/api/story", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ emotion, text }), // 把情緒與原始輸入都送過去
//       });

//       const data = await res.json();
//       setStory(data.story || "No story available.");
//     } catch (err) {
//       console.error("API error:", err);
//       setStory("Error generating story.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 py-10">
//       {/* 💡 LOGO + 教學導語 */}
//       <div className="max-w-xl mx-auto text-center mb-10">
//         <img src="ex-logo.png" alt="Logo" className="mx-auto mb-4 h-20" />
//         <h1 className="text-4xl font-extrabold tracking-tight mb-2">
//           Emotion Explorer
//         </h1>
//         <p className="text-sm text-gray-500 dark:text-gray-400">
//           A beginner-friendly AI activity designed for Girls Who Code. Discover
//           how AI understands feelings, and let it tell you a story based on your
//           mood.
//         </p>
//       </div>

//       {/* 🧠 主功能卡片區 */}
//       <div className="max-w-xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-900 shadow-md rounded-xl border border-gray-200 dark:border-gray-700">
//         <h2 className="text-2xl font-bold text-center">
//           How Are You Feeling Today?
//         </h2>
//         <p className="text-center text-sm text-gray-500 dark:text-gray-400">
//           Enter a sentence and let AI guess your emotion.
//         </p>

//         <Textarea
//           placeholder="Ex: I feel lonely because nobody understands me."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         <Button onClick={handleClassify} disabled={loading || !text}>
//           {loading ? "Analyzing..." : "Classify Emotion"}
//         </Button>

//         {emotion && (
//           <Card>
//             <CardContent className="text-center py-4">
//               <p className="text-lg">
//                 Emotion detected:{" "}
//                 <strong className="capitalize text-yellow-400">
//                   {emotion}
//                 </strong>
//               </p>
//               <Button onClick={handleGenerateStory} className="mt-2">
//                 <Sparkles className="w-4 h-4 mr-2" /> Generate AI Story
//               </Button>
//             </CardContent>
//           </Card>
//         )}

//         {story && (
//           <Card>
//             <CardContent className="text-left py-4 space-y-2">
//               <p className="font-semibold">AI Story:</p>
//               <p className="text-gray-800 dark:text-gray-100">{story}</p>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//       <AboutModal />
//     </div>
    
//   );
// }
"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import AboutModal from "./AboutModal";

export default function EmotionClassifier() {
  const [text, setText] = useState("I feel lonely because nobody understands me.");
  const [emotion, setEmotion] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClassify = async () => {
    setLoading(true);
    setEmotion("");
    setStory("");

    // 👉 模擬 Emotion API 回應
    setTimeout(() => {
      setEmotion("sad");
      setLoading(false);
    }, 1000);
  };

  const handleGenerateStory = async () => {
    setLoading(true);
    setStory("");

    // 👉 模擬 GPT 故事生成
    setTimeout(() => {
      setStory(
        "One day, Mina was sitting in the library reading, just like she always did. Through the window, she saw many people outside laughing and playing together. They looked happy. But in that moment, a feeling of loneliness rose quietly in her chest.\n\nShe looked down at her book and reminded herself — these pages weren’t just filling time. They were helping her understand herself better.\n\nMina realized that loneliness wasn’t weakness. It was a kind of strength. It meant she could make her own choices. It meant she could carry the weight of silence without running away from it.\n\nShe liked who she was becoming — someone who chose freedom over fitting in. Someone who couldn’t be controlled, belittled, or swayed too easily.\n\nThat, she thought, is what it means to be truly strong."
        
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 py-10">
      {/* 💡 LOGO + 教學導語 */}
      <div className="max-w-xl mx-auto text-center mb-10">
        <img src="ex-logo.png" alt="Logo" className="mx-auto mb-4 h-20" />
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Emotion Explorer
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          A beginner-friendly AI activity designed for Girls Who Code. Discover
          how AI understands feelings, and let it tell you a story based on your
          mood.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          ⚠️ This is a frontend-only demo with simulated responses. Backend/API is currently disabled to save costs.
        </p>
      </div>

      {/* 🧠 主功能卡片區 */}
      <div className="max-w-xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-900 shadow-md rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center">
          How Are You Feeling Today?
        </h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Enter a sentence and let AI guess your emotion.
        </p>

        <Textarea
          placeholder="Ex: I feel lonely because nobody understands me."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button onClick={handleClassify} disabled={loading || !text}>
          {loading ? "Analyzing..." : "Classify Emotion"}
        </Button>

        {emotion && (
          <Card>
            <CardContent className="text-center py-4">
              <p className="text-lg">
                Emotion detected:{" "}
                <strong className="capitalize text-yellow-400">
                  {emotion}
                </strong>
              </p>
              <Button onClick={handleGenerateStory} className="mt-2">
                <Sparkles className="w-4 h-4 mr-2" /> Generate AI Story
              </Button>
            </CardContent>
          </Card>
        )}

        {story && (
          <Card>
            <CardContent className="text-left py-4 space-y-2">
              <p className="font-semibold">AI Story:</p>
              <p className="text-gray-800 dark:text-gray-100">{story}</p>
            </CardContent>
          </Card>
        )}
      </div>
      <AboutModal />
    </div>
  );
}
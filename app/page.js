import EmotionClassifier from "./components/EmotionClassifier";
export default function Home() {
  return (
    <div className="flex items-center justify-item-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] justify-center">
      <EmotionClassifier />
    </div>
  );
}

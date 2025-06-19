"use client";

import Image from "next/image";
import SkillBadge from "../components/SkillBadge";

const skills = [
  { name: "Python", iconSlug: "python" },
  { name: "Next.js", iconSlug: "nextdotjs" },
  { name: "AWS", iconSlug: "amazonwebservices" },
  { name: "Docker", iconSlug: "docker" },
  { name: "Git", iconSlug: "git" },
  { name: "GitHub Actions", iconSlug: "githubactions" },
  { name: "Terraform", iconSlug: "terraform" },
  { name: "Qiskit", iconSlug: "qiskit" },
];


export default function Home() {
  return (
    <div className="bg-gray-200 bg-opacity-90 p-8 rounded-lg shadow-md max-w-xs w-full text-center">
        {/* プロフィール画像 */}
        <div className="mb-4">
        <Image src="https://avatars.githubusercontent.com/lxizaxi?v=4" alt="プロフィール画像" width={128} height={128} unoptimized className="w-32 h-32 rounded-full mx-auto"/>
        </div>
        {/* プロフィール名 */}
        <h1 className="text-xl font-semibold mb-2">shota</h1>
        {/* プロフィール説明 */}
        <p className="text-gray-500 text-sm mb-2 italic">
        System Engineer
        </p>
        
        {/* スキルバッジ */}
        <div className="mb-4 flex flex-wrap justify-center items-center gap-x-1 gap-y-2">
        {skills.map((skill) => (
            <SkillBadge
            key={skill.name} // リストレンダリング時のキー
            name={skill.name}
            iconSrc={`https://cdn.simpleicons.org/${skill.iconSlug}`}
            altText={skill.name}
            />
        ))}
        </div>

        {/* リンク集 */}
        <div className="flex space-x-4">
        <a href="https://github.com/lxizaxi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-gray-800 text-white py-2 rounded-lg">
            <i className="fab fa-github text-2xl"/>
        </a>
        <a href="https://x.com/lxizaxi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-black text-white py-2 rounded-lg">
            <i className="fab fa-x-twitter text-2xl"/>
        </a>
        <a href="https://qiita.com/lxizaxi" target="_blank" rel="noopener noreferrer" className="bg-white flex items-center justify-center w-full text-black py-2 rounded-lg">
            <Image src="https://cdn.simpleicons.org/qiita" alt="Qiita" width={35} height={35} unoptimized/>
        </a>
        <p className="flex items-center justify-center w-full py-2 rounded-lg"/>
        </div>
    </div>
  );
}

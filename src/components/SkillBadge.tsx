import Image from "next/image";

interface SkillBadgeProps {
  name: string;
  iconSrc: string;
  altText: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, iconSrc, altText="" }) => {
  return (
    <div className="badge badge-xs">
      <Image src={iconSrc} alt={altText} width={16} height={16} unoptimized />&nbsp;{name}
    </div>
  );
};

export default SkillBadge;
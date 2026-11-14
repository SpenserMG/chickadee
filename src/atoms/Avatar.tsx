import styles from "./Avatar.module.scss";

type AvatarProps = {
  initials: string;
};

export default function Avatar({ initials }: AvatarProps) {
  return (
    <div
      aria-hidden
      className={`${styles.avatar} h-32 w-32 sm:h-40 sm:w-40 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-semibold select-none`}
    >
      {initials}
    </div>
  );
}

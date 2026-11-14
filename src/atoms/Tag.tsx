import styles from "./Tag.module.scss";

type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <li className={`${styles.tag} text-xs sm:text-sm px-3 py-1 rounded-full border`}>
      {label}
    </li>
  );
}

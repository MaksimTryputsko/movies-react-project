import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import styles from "./heart.module.scss"

interface IHeart {
  isSelected: boolean
  onClickRemoveFromSelected: () => void
  onClickToSelected: () => void
}

const Heart = ({ isSelected, onClickToSelected, onClickRemoveFromSelected }: IHeart) => (
  <div>
    {isSelected ? (
      <AiFillHeart
        className={styles.default}
        color="red"
        onClick={onClickRemoveFromSelected}
        size="30"
      />
    ) : (
      <AiOutlineHeart
        className={styles.default}
        color="red"
        onClick={onClickToSelected}
        size="30"
      />
    )}
  </div>
)

export { Heart }

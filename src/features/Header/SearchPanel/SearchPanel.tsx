import { Button } from "@/components/Button/Button";
import Styles from "./SearchPanel.module.scss";
import Image from "next/image";
import { InputField } from "@/components/features/InputField/InputField";

export const SearchPanel = () => {
  return (
    <form
      className={Styles.container}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputField className={Styles.input} placeholder="Search..." />
      <Button className={Styles.search}>
        <Image src={"/search.svg"} alt="Search Icon" width={20} height={20} />
      </Button>
    </form>
  );
};

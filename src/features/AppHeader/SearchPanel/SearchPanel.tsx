import { Button } from "@/components/Button/Button";
import Styles from "./SearchPanel.module.scss";
import Image from "next/image";
import { InputField } from "@/components/InputField/InputField";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function SearchPanel() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push(`/?name=${query}`);
  };
  return (
    <form className={Styles.container} onSubmit={handleSubmit}>
      <InputField
        className={Styles.input}
        placeholder="Search friends..."
        value={query}
        onChange={({ target: { value } }) => {
          setQuery(value);
        }}
      />
      <Button className={Styles.search}>
        <Image src={"/search.svg"} alt="Search Icon" width={20} height={20} />
      </Button>
    </form>
  );
}

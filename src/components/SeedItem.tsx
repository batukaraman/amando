import { useSelector, useDispatch } from "react-redux";
import { toggleWordSelection } from "@/store/walletCreateSlice";
import { RootState } from "@/store";

const SeedItem: React.FC<{
  label: string;
  index?: number;
  onlyShow?: boolean;
  verifing?: boolean;
}> = ({ label, index, onlyShow, verifing }) => {
  const dispatch = useDispatch();
  const { verificationIndices, selectedWords } = useSelector(
    (state: RootState) => state.walletCreate
  );

  const isDisabled = (word: string): boolean => {
    const isLastSelected = selectedWords[selectedWords.length - 1] === word;
    return (
      (!isLastSelected && selectedWords.length >= verificationIndices.length) ||
      (selectedWords.includes(word) && !isLastSelected)
    );
  };

  if (onlyShow) {
    return (
      <div className="select-none flex items-center justify-center p-2 ring-1 ring-zinc-800 text-sm rounded-xl">
        {index && `${index}. `}
        {label}
      </div>
    );
  }

  return (
    <div>
      <input
        type="checkbox"
        id={`word-${label}`}
        className="hidden peer"
        checked={selectedWords.includes(label)}
        onChange={() => dispatch(toggleWordSelection(label))}
        disabled={isDisabled(label)}
      />
      <label
        htmlFor={`word-${label}`}
        className="select-none flex items-center justify-center p-2 ring-1 ring-zinc-800 text-sm rounded-xl cursor-pointer peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:ring-0 peer-disabled:cursor-not-allowed peer-disabled:text-gray-400"
      >
        {!verifing && `${index}. `}
        {label}
      </label>
    </div>
  );
};

export default SeedItem;

import{Btn} from './Button.styled'
export default function Button({ text, onClick }) {
    return (
      <>
        <Btn type="button" onClick={onClick}>
          {text}
        </Btn>
      </>
    );
}
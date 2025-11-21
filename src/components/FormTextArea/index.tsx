export default function FormTextArea(props: any) {

  const { 
    validation, 
    invalid = "false", 
    dirty = "false", 
    onTurnDirty,  
    ...textareaProps 
  } = props;

  function handleBlur() {
    onTurnDirty(props.name);
  }

  return (
      <textarea 
        {...textareaProps} 
        onBlur={handleBlur} // quando ocorrer o evento onBlur(clicar fora do campo), ele chama a função handleBlur
        data-dirty={dirty}
        data-invalid={invalid} 
      />
  );
}

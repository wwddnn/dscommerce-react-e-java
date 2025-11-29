export function update(inputs: any, name: string, newValue: any) {
  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function toValues(inputs: any) {
  const data: any = {};

  for (const name in inputs) {
    data[name] = inputs[name].value;
  }
  return data;
}

export function updateAll(inputs: any, newValues: any) {
  const newInputs: any = {}; // cria um objeto vazio
  for (const name in inputs) {
    newInputs[name] = { ...inputs[name], value: newValues[name] };
  }
  return newInputs;
}

export function validate(inputs: any, name: string) {
  if (!inputs[name].validation) {
    // caso a função valitation não exista
    return inputs;
  }
  const isInvalid = !inputs[name].validation(inputs[name].value);
  return {
    ...inputs,
    [name]: { ...inputs[name], invalid: isInvalid },
  };
}

export function toDirty(inputs: any, name: string) {
  return { ...inputs, [name]: { ...inputs[name], dirty: true } };
}

// função auxiliar // chama o update e o validate
export function updateAndValidate(inputs: any, name: string, newValue: any) {
  const dataUpdated = update(inputs, name, newValue);
  return validate(dataUpdated, name);
}

// função auxiliar // chama o dirty e o validate
export function dirtyAndValidate(inputs: any, name: string) {
  const dataDirty = toDirty(inputs, name);
  return validate(dataDirty, name);
}

/* suja todos os campos do formulário */
export function toDirtyAll(inputs: any) {
  const newInputs: any = {};
  for (var name in inputs) {
    newInputs[name] = { ...inputs[name], dirty: true };
  }
  return newInputs;
}

/* aplica a função de validação em todos os inputs*/
export function validateAll(inputs: any) {
  const newInputs: any = {};
  for (var name in inputs) {
    if (inputs[name].validation) {
      const isInvalid = !inputs[name].validation(inputs[name].value);
      newInputs[name] = { ...inputs[name], invalid: isInvalid };
    } 
    else {
      newInputs[name] = { ...inputs[name] };
    }
  }
  return newInputs;
}

/* suja e valida todo mundo */
export function dirtyAndValidateAll(inputs: any) {
  return validateAll(toDirtyAll(inputs));
}

/* verifica se algum campo é inválido */
export function hasAnyInvalid(inputs: any) {
  for (var name in inputs) {
    if (inputs[name].dirty === true && inputs[name].invalid === true) {
      return true;
    }
  }
  return false;
}

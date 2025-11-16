let formData = { email: '', message: '' };

const refs = {
  findForm: document.querySelector('.feedback-form'),
};
const FEELBACK_KEY = 'feedback-form-state';

const feelFeedback = () => {
  const formLS = JSON.parse(localStorage.getItem(FEELBACK_KEY));
  if (formLS === null) {
    return;
  }
  Object.assign(formData, formLS);

  const formKeys = Object.keys(formLS);

  formKeys.forEach(key => {
    if (refs.findForm.elements[key]) {
      refs.findForm.elements[key].value = formLS[key];
    }
  });
};
feelFeedback();

const onFormInput = ({ target: formField }) => {
  const formFieldName = formField.name;
  const formValue = formField.value.trim();

  formData[formFieldName] = formValue;

  localStorage.setItem(FEELBACK_KEY, JSON.stringify(formData));
};

const onSubmit = event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(FEELBACK_KEY);

  formData = { email: '', message: '' };
  event.target.reset();
};

refs.findForm.addEventListener('input', onFormInput);
refs.findForm.addEventListener('submit', onSubmit);

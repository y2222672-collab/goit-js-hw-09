let formData = { email: '', message: '' };

const refs = {
  findForm: document.querySelector('.feedback-form'),
};

const feelFeedback = () => {
  const formLS = JSON.parse( localStorage.getItem('feedback-form-state'))
  if (formLS === null) {
    return;
  }

  formData = formLS;

const formKeys = Object.keys(formLS)


formKeys.forEach(key => {
    refs.findForm.elements[key].value = formLS[key];
});

};
feelFeedback();

const onFormInput = ({ target: formField }) => {
  const formFieldName = formField.name;
  const formValue = formField.value.trim();

  formData[formFieldName] = formValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onSubmit = event => {
if (!formData.email || !formData.message) {
    alert('Fill please all fields'); 
    return; 
}
console.log(formData);

event.preventDefault();
event.target.reset();
localStorage.removeItem('feedback-form-state')

formData = { email: '', message: '' };
};

refs.findForm.addEventListener('input', onFormInput);
refs.findForm.addEventListener('submit', onSubmit)

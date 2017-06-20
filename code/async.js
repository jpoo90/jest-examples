const languages = {
  US: 'English',
  TV: 'Tuvaluan'
};

function getLanguageByCountry(country) {
  return new Promise((resolve, reject) => {
    if (languages[country]) {
      resolve(languages[country]);
    } else {
      reject('😶');
    }
  });
}

export default getLanguageByCountry;

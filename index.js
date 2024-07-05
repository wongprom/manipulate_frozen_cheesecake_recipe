//? 1.What is the name of the recipe?
// 1.1
const recipeNameQuery = document.querySelector('.logo-text').textContent;
console.log('🚀 ~ recipeNameQuery:', recipeNameQuery);
// 1.2
const recipeNameGet = document.getElementsByClassName('logo-text')[0].innerHTML;
console.log('🚀 ~ recipeNameGet:', recipeNameGet);

//? 2.What HTML tag is used to display the Recipe name?
// 2.1
const recipeNameTagQuery = document.querySelector('header p');
console.log('🚀 ~ recipeNameTagQuery:', recipeNameTagQuery);
// 2.2
const recipeNameTagGet = document.getElementsByTagName('p')[0];
console.log('🚀 ~ recipeNameTagGet:', recipeNameTagGet);

//? 3.What is the font size of the paragraph tag with the class "description".
const description = document.querySelector('.description');
const descriptionStyles = window.getComputedStyle(description);
const descriptionFontSize = descriptionStyles.fontSize;
console.log('🚀 ~ descriptionFontSize:', descriptionFontSize);

//? 4.What is the value of the alt atrribute on the image?
const image = document.querySelector('.image-container img');
const imageAltValue = image.getAttribute('alt');
console.log('🚀 ~ imageAltValue:', imageAltValue);

//? 5. What is the dimensions and the url of the image?
//Create an object that lookslike this, and log it to the console:
// {
//   url: string
//   height: number,
//   width: number,
// }
const image2 = document.querySelector('.image-container img');
const image2Styles = window.getComputedStyle(image2);
//url
const image2Url = image2.getAttribute('src');
//height
const image2HeightString = image2Styles.height;
const image2HeightNum = Number(image2HeightString.replace(/[^.\d]/g, ''));
//width
const image2WidthtString = image2Styles.width;
const image2WidthtNum = Number(image2WidthtString.replace(/[^.\d]/g, ''));

const imageData = {
  url: image2Url,
  height: image2HeightNum,
  witwidthh: image2WidthtNum,
};
console.log('🚀 ~ imageData:', imageData);

//? 6. How many ingredients has the paste?
const numOfPasteIngredients = document.querySelectorAll(
  '.ingredients-list-paste li'
).length;
console.log('🚀 ~ numOfPasteIngredients:', numOfPasteIngredients);

//? 7. Which is the forth element in the list containing the ingredients for the paste?
const fourthElementOfPasteIngredients = document.querySelectorAll(
  '.ingredients-list-paste li'
)[3].textContent;
console.log(
  '🚀 ~ fourthElementOfPasteIngredients:',
  fourthElementOfPasteIngredients
);

//? 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
// {
//   order: number;
//   text: instruction;
// }
const instructionsList = document.querySelectorAll('.instructions-list li');
const instructionArr = [];
instructionsList.forEach((instruction, index) => {
  const tempObj = { order: index + 1, text: instruction.innerText };
  instructionArr.push(tempObj);
});
console.log('🚀 ~ instructionArr:', instructionArr);
// [
//   {
//       "order": 1,
//       "text": "Smula sönder 10 stycken digistivetex och blanda sen med smöret. Bred ut det i botten av en en rund form med lösbara kanter. Det ska bli som en tjockt täcke på botten av formen."
//   },
//   {
//       "order": 2,
//       "text": "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke."
//   },
//   {
//       "order": 3,
//       "text": "Vispa äggvitorna hårt med en elvisp. De är tillräckligt vispade när du kan vända uppochner på bunken utan att det rör sig."
//   },
//   {
//       "order": 4,
//       "text": "Häll upp grädden i en mellanstor bunke. Vispa de relativ hårt. En aning hårdare en vanligt."
//   },
//   {
//       "order": 5,
//       "text": "Blanda i philadelphiaosten och vaniljsockret med äggulorna och vispa ihop."
//   },
//   {
//       "order": 6,
//       "text": "Häll nu över innehållet i bunken med äggulor över grädden. Vispa ihop på lägsta hastigheten."
//   },
//   {
//       "order": 7,
//       "text": "Häll sedan över det innehållet till bunken med äggvitorna. Blande ihop med en gaffel tills det blir en slät fluffig smet."
//   },
//   {
//       "order": 8,
//       "text": "Häll smeten i formen, smula över de resterande digistivetexen om du vill."
//   },
//   {
//       "order": 9,
//       "text": "Ställ in i frysen över natten."
//   },
//   {
//       "order": 10,
//       "text": "Servera och toppa med det du känner för."
//   }
// ]

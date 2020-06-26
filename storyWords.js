function storyWords(response) {
  const { kinName, author, town, kinType, animalName, gender, animalNoise, objectName, placeName } = response;
  return `
    
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The story of ${kinName.charAt(0).toUpperCase() + kinName.slice(1)}</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>

<body class="container">
   <h1>${kinName.charAt(0).toUpperCase() + kinName.slice(1)}</h1>
   <h3>By ${author.charAt(0).toUpperCase() + author.slice(1)}</h3>
   <p>
    One day in ${town} I saw my ${kinType} ${kinName.charAt(0).toUpperCase() + kinName.slice(1)} acting like a ${animalName}.
    ${gender} was ${animalNoise} in a big ${objectName}. Then ${gender} went to ${placeName}
    and did it again. The End.
   </p>
</body>

</html>
    `
}
module.exports = storyWords;
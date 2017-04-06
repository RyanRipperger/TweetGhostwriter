function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["Have you ever noticed that", "Its disturbing how", "What I don't understand is", "Isn't it crazy that"];
  var body = ["cats", "computers", "video games", "iphones", "school lunches", "this weather"];
  var end = ["are really good at wasting your time", "can sometimes drive you insane"];
  var randIndexIntro = randomUpTo(intro.length-1);
  sentence = intro[randIndexIntro];
  var randIndexBody = randomUpTo(body.length-1);
  sentence = sentence + " " + body[randIndexBody];
  var randIndexEnd = randomUpTo(end.length-1);
  sentence = sentence + " " + end[randIndexEnd] + ".";
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}

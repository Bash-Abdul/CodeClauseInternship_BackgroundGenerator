let container = document.querySelector(".container");
let classes = 'class="rotate-icon"'

container.innerHTML = `

<div class="alert"></div>

<div class="background_container">
        <div class="colors">
        <input type="color" class="color1" value="#1488cc">
        <input type="color" class="color2" value="#2b32b2">
        </div>

        <div class="buttons">
          <button class="active" onclick="setDirection('to top', this)">
          <i class='bx bx-up-arrow-alt'></i>
          </button>

          <button onclick="setDirection('to bottom', this)">
          <i class='bx bx-down-arrow-alt'></i>
          </button>

          <button onclick="setDirection('to left', this)">
          <i class='bx bx-left-arrow-alt'></i>
          </button>

          <button onclick="setDirection('to right', this)">
          <i class='bx bx-right-arrow-alt'></i>
          </button>
          <button ${classes} onclick="setDirection('to top right', this)">
          <i class='bx bx-up-arrow-alt'></i>
          </button>

          <button ${classes} onclick="setDirection('to bottom left', this)">
          <i class='bx bx-down-arrow-alt'></i>
          </button>

          <button ${classes} onclick="setDirection('to top left', this)">
          <i class='bx bx-left-arrow-alt'></i>
          </button>

          <button ${classes} onclick="setDirection('to bottom right', this)">
          <i class='bx bx-right-arrow-alt'></i>
          </button>
        </div>

        <button class="submit">GENERATE</button>

        
        <div class="output">
        <textarea class="code"></textarea>
        <button class="copy">COPY</button>
        </div>
    
</div>
`;

let colorOne = document.querySelector(".color1");
let colorTwo = document.querySelector(".color2");

let currentDirection = 'to top';
let outputCode = document.querySelector(".code");
let generateBtn = document.querySelector(".submit");
let copyBtn = document.querySelector(".copy")
let alert = document.querySelector('.alert');

function setDirection(value, _this){
  let directions = document.querySelectorAll(".buttons button");
  for(let i of directions){
    i.classList.remove('active');
    alert.style.opacity = "0";
  }

  _this.classList.add('active');
  currentDirection = value;
};

generateBtn.addEventListener('click', ()=>{
  outputCode.value = `background-image:linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`

  document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection},${colorOne.value}, ${colorTwo.value})`;
});

copyBtn.addEventListener('click', ()=>{
  outputCode.select();
  document.execCommand('copy');
  

  if(outputCode.value === ''){
    alert.innerHTML = `<p> EMPTY FIELD! <span><i class='bx bxs-x-circle red'></i></span> </p>`
    alert.style.opacity = "1";
  }
  else{
    alert.innerHTML = `<p> Gradient Background Copied! <span><i class='bx bxs-check-circle check'></i></span </p>`;
    alert.style.opacity = "1";
  }
})




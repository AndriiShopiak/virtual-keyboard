// ADD keyboards markup
let body1 = document.querySelector("body");
let markup = body1.innerHTML = `<div class="container">
                <div class="night_mode">
                    <div class="toggle_circle"></div>
                </div>
                <div class="change_light_color">
                    <div class="colors">
                        <input class="colors_input" type="color" >
                    </div>
                </div>
                <div class="keyboard_wrapp">
                    <div class="keyboard_lights"></div>
                    <div class="keyboard_keys">
                        <div class="row">
                            <div class="keys russ">~</div>
                            <div class="keys">1</div>
                            <div class="keys">2</div>
                            <div class="keys">3</div>
                            <div class="keys">4</div>
                            <div class="keys">5</div>
                            <div class="keys">6</div>
                            <div class="keys">7</div>
                            <div class="keys">8</div>
                            <div class="keys">9</div>
                            <div class="keys">0</div>
                            <div class="keys">-</div>
                            <div class="keys">=</div>
                            <div class="keys backspace_key">Backspace</div>
                        </div>
                        <div class="row">
                            <div class="keys tab_key">Tab</div>
                            <div class="keys russ" id="key">q</div>
                            <div class="keys russ" id="key">w</div>
                            <div class="keys russ" id="key">e</div>
                            <div class="keys russ" id="key">r</div>
                            <div class="keys russ" id="key">t</div>
                            <div class="keys russ" id="key">y</div>
                            <div class="keys russ" id="key">u</div>
                            <div class="keys russ" id="key">i</div>
                            <div class="keys russ" id="key">o</div>
                            <div class="keys russ" id="key">p</div>
                            <div class="keys russ">{</div>
                            <div class="keys russ">}</div>
                            <div class="keys slash_key">&#92;</div>
                        </div>
                        <div class="row">
                            <div class="keys caps_lock_key">Caps Lock</div>
                            <div class="keys russ" id="key">a</div>
                            <div class="keys russ" id="key">s</div>
                            <div class="keys russ" id="key">d</div>
                            <div class="keys russ" id="key">f</div>
                            <div class="keys russ" id="key">g</div>
                            <div class="keys russ" id="key">h</div>
                            <div class="keys russ" id="key">j</div>
                            <div class="keys russ" id="key">k</div>
                            <div class="keys russ" id="key">l</div>
                            <div class="keys russ">;</div>
                            <div class="keys russ">"</div>
                            <div class="keys enter_key">Enter</div>
                        </div>
                        <div class="row">
                            <div class="keys shift_key shift_left">Shift</div>
                            <div class="keys russ" id="key">z</div>
                            <div class="keys russ" id="key">x</div>
                            <div class="keys russ" id="key">c</div>
                            <div class="keys russ" id="key">v</div>
                            <div class="keys russ" id="key">b</div>
                            <div class="keys russ" id="key">n</div>
                            <div class="keys russ" id="key">m</div>
                            <div class="keys russ">,</div>
                            <div class="keys russ">.</div>
                            <div class="keys">/</div>
                            <div class="keys">?</div>
                            <div class="keys shift_key shift_right">Shift</div>
                        </div>
                        <div class="row">
                            <div class="keys ctrl_key ctrl_left">Ctrl</div>
                            <div class="keys win_key">
                              <?xml version="1.0" ?><svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Windows 10" id="Windows_10"><path d="M8,11.35,17.81,10v9.49H8M19,9.82l13-1.9V19.41H19M8,20.49h9.81V30L8,28.63m11-8H32V32L19,30.16"/></g></svg>
                            </div>
                            <div class="keys alt_key alt_left">Alt</div>
                            <div class="keys space_key"></div>
                            <div class="keys alt_key alt_right">Alt</div>
                            <div class="keys">Fn</div>
                            <div class="keys ctrl_key ctrl_right">Ctrl</div>
                        </div>
                    </div>
                </div>
                <input class="text" type="text">
                </div>`;

//Add functions for keyboard
let keys = document.querySelectorAll(".keys");
let spaceKey = document.querySelector(".space_key");
let shift_left = document.querySelector(".shift_left");
let shift_right = document.querySelector(".shift_right");
let caps_lock_key = document.querySelector(".caps_lock_key");
let toggle_circle = document.querySelector(".toggle_circle");
let night_mode = document.querySelector(".night_mode");
let body = document.querySelector("body");
let text_input = document.querySelector(".text");
let change_color = document.querySelector(".change_light_color");
let colors_input = document.querySelector(".colors_input");
let keyboard_lights = document.querySelector(".keyboard_lights");
let keyboard_wrapp = document.querySelector(".keyboard_wrapp");
let letters = document.querySelectorAll("#key");
let controlLeft = document.querySelector(".ctrl_left");
let winKey = document.querySelector(".win_key");
let winSvgIcon = document.querySelector("svg");

// AutoFocus for text_input 
function FocusOnInput() {
    text_input.focus();
    setTimeout(function () { text_input.focus(); }, 1);
}

FocusOnInput();
// Add russian alphabet
let russAbr = document.querySelectorAll(".russ");
let russABC = ["ё","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю"];
let engABC = ["~","q","w","e","r","t","y","u","i","o","p","{","}","a","s","d","f","g","h","j","k","l",";",`"`,"z","x","c","v","b","n","m",",","."];
// console.log(russAbr[2].innerHTML);

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute("keyname", keys[i].innerText);
    keys[i].setAttribute("lowerCaseName", keys[i].innerText.toUpperCase());
}
let count = 0;
let countLang = 0;
window.addEventListener("keydown", function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute("keyname") || e.key == keys[i].getAttribute("lowerCaseName")) {
            keys[i].classList.add("active");
        }
        if(e.code == "Space") {
            spaceKey.classList.add("active");
        }
        if(e.code == "ControlLeft") {
            controlLeft.classList.add("active");
            if (countLang == 0) {
                russAbr.forEach( (a, index) => {
                    a.innerText = russABC[index];
                });
                countLang = 1;
                break;
            } else {
                russAbr.forEach( (a, index) => {
                    a.innerText = engABC[index];
                });
                countLang = 0;
                break;
            }
        }
        if(e.code == "MetaLeft") {
            winKey.classList.add("active");
        }
        if(e.code == "ShiftLeft") {
            shift_right.classList.remove("active");
            letters.forEach((e) => {
                    e.style.cssText = "text-transform: uppercase;";
                });
        }
        if(e.code == "ShiftRight") {
            shift_left.classList.remove("active");
        }
        if(e.code == "CapsLock") {
            caps_lock_key.classList.toggle("active");
            if (count == 0) {
                letters.forEach((e) => {
                    e.style.cssText = "text-transform: uppercase;";
                });
                count = 1;
            } else {
                letters.forEach((e) => {
                    e.style.cssText = "text-transform: lowercase;";
                });
                count = 0;
            }
        }
    }
});

window.addEventListener("keyup", function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute("keyname" ) || e.key == keys[i].getAttribute("lowerCaseName")) {
            keys[i].classList.remove("active");
            keys[i].classList.add("remove");
        }
        if(e.code == "Space") {
            spaceKey.classList.remove("active");
            spaceKey.classList.add("remove");
        }
        if(e.code == "ShiftLeft") {
            shift_right.classList.remove("active");
            shift_right.classList.remove("remove");
            letters.forEach((e) => {
                    e.style.cssText = "text-transform: lowercase;";
                });
        }
        
        if(e.code == "ControlLeft") {
            controlLeft.classList.remove("active");
        }
        if(e.code == "MetaLeft") {
            winKey.classList.remove("active");
        }
        if(e.code == "ShiftRight") {
            shift_left.classList.remove("active");
            shift_left.classList.remove("remove");
        }
        setTimeout(()=> {
            keys[i].classList.remove("remove");
        },200);
    }
});

night_mode.addEventListener("click",function() {
    toggle_circle.classList.toggle("active");
    body.classList.toggle("active");
    night_mode.classList.toggle("active");
    keyboard_wrapp.classList.toggle("active");
    text_input.classList.toggle("active");
    change_color.classList.toggle("active");
    winSvgIcon.classList.toggle("active");
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle("keys_night");
    }
    FocusOnInput();
});

colors_input.addEventListener("input",function() {
    for(let i = 0; i < keys.length; i++) {
        keys[i].style.color = colors_input.value;
    }
    keyboard_lights.style.background = colors_input.value;
}); 
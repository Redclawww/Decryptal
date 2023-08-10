function chatbox(){
  const msgIcon = document.querySelector('.msg-icon');
  const closeIcon = document.querySelector('.close-icon');
  const chatBox = document.querySelector('.chat-box');

  msgIcon.addEventListener('click', () => {
      msgIcon.style.visibility = 'hidden';
      closeIcon.style.visibility = 'visible';
      chatBox.style.visibility = 'visible';
  });

  closeIcon.addEventListener('click', () => {
      msgIcon.style.visibility = 'visible';
      closeIcon.style.visibility = 'hidden';
      chatBox.style.visibility = 'hidden';
  });
}

function accordian(){
    let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
}

function animations(){
    const tl = gsap.timeline();
    
    tl.to(".card1",{
  
      scale: 1,
      scrollTrigger:{
        trigger:".card1",
        scroller:"body",
        start: "top 80%",
        end:"top 30%",
        scrub: true
      }
    });

    tl.to(".card2",{
      
      scale: 1,
      scrollTrigger:{
        trigger:".card2",
        scroller:"body",
        start: "top 80%",
        end:"top 30%",
        scrub: true
      }
    });
    tl.to(".card3-left,.card3-right",{
    
      scale: 1,
      scrollTrigger:{
        trigger:".card3-left,.card3-right",
        scroller:"body",
        start: "top 80%",
        end:"top 30%",
        scrub: true
      }
      
    });
    tl.to(".nexus-mutual",{
     
      scale: 1,
      scrollTrigger:{
        trigger:".nexus-mutual",
        scroller:"body",
        start: "top 80%",
        end:"top 30%",
        scrub: true
      }
      
    });
}



chatbox();

accordian();

animations();
function change(){
  var sample = document.getElementById("sample");
  //한줄 주석
  /*
  여
  러
  줄
  주석
  */

  if(sample.innerHTML == "hi"){//sample의 내용이 hi면 true}
    sample.innerHTML = "bye" //sample의 내용을 bye로 바꿈
  }else{
    sample.innerHTML = "hi" //sample의 내용을 hi로 바꿈
  }
}

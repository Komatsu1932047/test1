(() => {
    class Accordion{ //クラスの最初は大文字
        //初期化
        constructor(obj){

            console.log("aaaaaaaaaaaaa");
            const elm = document.querySelector(obj.hookName);
            const triger = elm.querySelectorAll(obj.tagName);

            const triggerLen = triger.length;
            let index = 0;
            while(index < triggerLen){
                triger[index].addEventListener('click',this.clickHandler); //クラスの中で関数指定したら「this」入れる
                index++;
            }
        }
            //クリックされたら実行
            clickHandler (e){
                e.preventDefault();

                const target = e.currentTarget;
                const content = target.nextElementSibling;//triger[0]の次の要素をとってくる

                if(content.style.display === 'block'){
                     content.style.display = 'none';
                }
                else{
                    content.style.display = 'block';
                }
            };
    }
    const testAccordion = new Accordion({
        hookName: '#js-tes',
        tagName: 'p'
    });

    const dummyAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'a'
    });

    const miniAccordion = new Accordion({
        hookName: '#js-accordion-mini',
        tagName: 'dt'
    });
})();
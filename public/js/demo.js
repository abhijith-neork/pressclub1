function setBackButton() {   
    var iframe = document.getElementById("app_iframe"); 
    if (iframe) {
        var a_elemnt = iframe.contentWindow.document.getElementsByClassName('Button NavButton secondary previous')[0];
        
        if (a_elemnt) {       
            var old_element = a_elemnt;
            var new_element = old_element.cloneNode(true);
            old_element.parentNode.replaceChild(new_element, old_element);

            new_element.href = '/';
            new_element.setAttribute("target", "_top");

            clearInterval(backButtonInterval);
        }
    }
}
backButtonInterval = setInterval(setBackButton, 1000);

function setDemoCategory() {   
    var iframe = document.getElementById("app_iframe"); 

    if (iframe) {
        var a_elemnts = iframe.contentWindow.document.getElementsByClassName('CategoryFilterOption');

        if (a_elemnts.length) { 
            clearInterval(demoCategoryInterval);

            for (var i=0; i < a_elemnts.length; i++) {
                var old_element = a_elemnts[i];
                var new_element = old_element.cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);

                new_element.href = '#';

                if (i != 0) {                
                    new_element.style.opacity = "0.5"; 
                    new_element.style.cursor = "pointer";
                }
            }          
        }
    }
}
demoCategoryInterval = setInterval(setDemoCategory, 1000);

function setClearFilter() {   
    var iframe = document.getElementById("app_iframe"); 
    if (iframe) {
        var a_elemnts = iframe.contentWindow.document.getElementsByClassName('ClearFilterButtonView');

        if (a_elemnts.length == 2) {
            clearInterval(setClearFilterInterval);

            var ele_length = a_elemnts.length;
            for (var i=0; i < ele_length; i++) {
                a_elemnts[0].parentNode.removeChild(a_elemnts[0]); 
            } 
        }
    }
}
setClearFilterInterval = setInterval(setClearFilter, 1000);

function setDemoProducts() {   
    var iframe = document.getElementById("app_iframe"); 
    if (iframe) {
        var a_elemnts = iframe.contentWindow.document.getElementsByClassName('ProductView medium');

        if (a_elemnts.length) { 
            clearInterval(demoProductsInterval);

            var ele_length = a_elemnts.length;
            for (var i=0; i < ele_length; i++) {
                var hrefdata = a_elemnts[0].getAttribute("href");
    
                var product2665 = hrefdata.search("productId=2665");
                var product2666 = hrefdata.search("productId=2666");

                if (product2665 < 30 && product2666 < 30) {                
                    a_elemnts[0].parentNode.removeChild(a_elemnts[0]);
                }            
            } 
        }
    }
}
demoProductsInterval = setInterval(setDemoProducts, 1000);

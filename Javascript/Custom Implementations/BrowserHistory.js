function BrowserHistory(){
    this.history=[];
    this.index=-1;

    this.visited=function(url){
        this.history[++index]=url;
    }

    this.current=function(){
        if(this.index<0){
            return 'Blank Page'
        }
        return this.history[this.index];
    }
    this.backward=function(){
        this.index= Math.max(-1,--this.index);
    }

    this.forawrd=function(){
        this.index=Math.min(this.history.length-1, ++this.index);
    }
}

let a= new BrowserHistory();
a.visited(1);
a.visited(2);
a.visited(3);
a.visited(4);
a.backward();
a.backward();
a.backward();
console.log(a.current());
a.forward();
console.log(a.current());
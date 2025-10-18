function debouncing(cb,delay){
    let timerId
    
    return function(...args){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId=setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}


<input type="text" id="searchBox" placeholder="Type to search..." />
<script>
  function handleSearch(e) {
    console.log('Searching for:', e.target.value);
  }

  const debouncedSearch = debounce(handleSearch, 500);

  document.getElementById('searchBox').addEventListener('input', debouncedSearch);
</script>

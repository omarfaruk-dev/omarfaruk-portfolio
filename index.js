useEffect(() => {
  let isMounted = true;
  
  fetchData().then(data => {
    if (isMounted) {
      setState(data);
    }
  });
 
  return () => {
    isMounted = false;
  };
}, []);
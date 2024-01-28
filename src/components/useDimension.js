
const useDimension = () => {
  const [dimension, setDimension] = useState({width: 0, height: 0})
  

  useEffect( () => {
    updateDimension();

    window.addEventListener("resize", updateDimension);

    return () => {window.removeEventListener("resize", updateDimension)};
  },[])

  return dimension;
}

export default useDimension;
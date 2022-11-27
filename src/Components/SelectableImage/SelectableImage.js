import { useState } from 'react';
import './selectableimage.css';
function SelectableImage({url}){
    const [selected, setSelected] = useState(false);
    const heart1 = "https://d1icd6shlvmxi6.cloudfront.net/gsc/T2Y1HZ/e0/d2/9d/e0d29de844d349a69fa8cd8f5177cce6/images/select_favourites_c/u1414.svg?token=5c9d6241fb019624a211c0d33299851a4c991bd3fce98b2d2b1416ac07982be6";
    const heart2 = "https://d1icd6shlvmxi6.cloudfront.net/gsc/T2Y1HZ/e0/d2/9d/e0d29de844d349a69fa8cd8f5177cce6/images/select_favourites_c/u1413.svg?token=4a971d0488a6818e6c25573b46c53eebc9d9dd478cb62b905e44da09360dee29";

    const inform = ()=>{
        alert()
    }
    return(
        <div className="item">
                <img onClick={()=>setSelected(!selected)} className="heart"
                    src={selected ? heart1 : heart2}
                    />
                    <img
                    height="350"
                    src={url}
                    />
                    <img
                        onClick={()=>inform}
                        className="view-gallery"
                        src="https://d1icd6shlvmxi6.cloudfront.net/gsc/T2Y1HZ/e0/d2/9d/e0d29de844d349a69fa8cd8f5177cce6/images/select_favourites_c/u1432.svg?token=8bb4c1c5ccef99626b19a7ad3c781fbd73b9b1246c6c72fdb8ea0e34774b3377"
                    />
                      <div className="text" >
                <p><span>+</span></p>
              </div>
                </div>
    )
}
export default SelectableImage;

import SelectableImage from "../Components/SelectableImage/SelectableImage"
import './selectfav.css';

const url = 'https://d1icd6shlvmxi6.cloudfront.net/gsc/T2Y1HZ/e0/d2/9d/e0d29de844d349a69fa8cd8f5177cce6/images/select_favourites_c/u1402.jpg?token=a52ecf7be43d53b363d6a92015bbdbbc1d56cf628822bbeb85c888caf018d252';
const url2 = 'https://d1icd6shlvmxi6.cloudfront.net/gsc/T2Y1HZ/e0/d2/9d/e0d29de844d349a69fa8cd8f5177cce6/images/select_favourites_c/u1402.jpg?token=a52ecf7be43d53b363d6a92015bbdbbc1d56cf628822bbeb85c888caf018d252';

const images = [
    {
        id:1,
        url : url
    },
    {
        id:2,
        url : url2
    },
    {
        id:3,
        url : url
    },
    {
        id:4,
        url : url2
    },
    {
        id:5,
        url : url
    },
    {
        id:6,
        url : url2
    },
    {
        id:7,
        url : url
    },
    {
        id:8,
        url : url2
    }
]

const heart1 = "https://d1icd6shlvmxi6.cloudfront.net/gsc/T2Y1HZ/e0/d2/9d/e0d29de844d349a69fa8cd8f5177cce6/images/select_favourites_c/u1413.svg?token=b2c7567d67c7c30114f2b713b3879a9d8065a0f75c346e1dc140df14195f67ac";
const heart2 = "https://d1icd6shlvmxi6.cloudfront.net/gsc/T2Y1HZ/e0/d2/9d/e0d29de844d349a69fa8cd8f5177cce6/images/select_favourites_c/u1417.svg?token=51d279550b71ce601df17f54f4f51051c84d0ae764aff2474e329ac6a54410da";
function SelectFavorite(){
    return (
        <div className="container">
            {
                images.map(({id, url}, index)=>
                    <SelectableImage url={url}/>
                )
            }
        </div>
    )
}

export default SelectFavorite;
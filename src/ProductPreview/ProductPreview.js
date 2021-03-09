import classes from './ProductPreview.module.css';

const ProductPreview=(props)=>{
return(
    <div className={classes.ProductPreview}>
        <img src={props.currentPreviewImage}/>

        {
            props.currentSelectedFeature==1 ?

            <div className={classes.HeartBeatSection}>
            <p>Heart</p>
            <p>78</p>
            </div>

            :

            <div className={classes.TimeSection}>
            <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
            </div>

        }        
    </div>
);
}

export default ProductPreview;
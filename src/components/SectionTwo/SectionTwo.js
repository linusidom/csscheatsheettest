export const SectionTwo = () => {
    return(

<div className="sectionTwo">
    
    <div className="sectionTwoImageDiv">
        <img className="sectionTwoImage" src="https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" alt="coloring"/>
    </div>

    <div className="sectionTwoText">
        <div className="redlineFlex">
            <div className="redline"></div>
        </div>
        <p className="sectionTwoHeader sectionHeader">Section Two</p>
        <p className="sectionTwoPara sectionPara">This was created using the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" className="linkSecondary">CSS FlexBox</a> layout</p>
    </div>
    
</div>


    )
}
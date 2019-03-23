import React from 'react';
import Button from '../../../global/button'
import './school-component.css';

const School = (props) => {

  const { title, src, btnClass, buttonTitle, description, showMore, isShowLess, buttonShowDescription, buttonHideDescription, likes, dislikes, handleLikeDislike } = props;

  // console.log('SchoolList - props -> ', props);
  // console.log('SchoolList - props -> ', title);
  // console.log('SchoolList - props -> ', studies);

  return (
    <div className='clearfix description-wrapper'>
      <div className='container stadies-wraper clearfix' >
        <img src={ src } alt='logo' className='index-logo'/>
        <h1>{ title }</h1>
        <div className='like-wrapper'>
                    <span className='like-wrapper_good'>
                        <i className="fa fa-thumbs-up likes-marker" onClick={ handleLikeDislike.bind(null, title, 'likes') }></i>
                        <span className='likes-quantity'>{ likes }</span>
                    </span>
          <span className='like-wrapper_bad'>
                        <i className='fa fa-thumbs-down likes-marker' onClick={ handleLikeDislike.bind(null, title, 'dislikes') }></i>
                        <span className='likes-quantity'>{ dislikes }</span>
                    </span>
        </div>
        <div className='clearfix description-wrapper'>
          <Button
            onClick={ showMore.bind(null, title) }
            btnClass={ btnClass + ' float-right' } >
            { isShowLess ? buttonShowDescription : buttonHideDescription || 'X'}
          </Button>

          <div className={ isShowLess ? 'hide' : 'show' + ' description-wrapper_text' } >
            { description }
          </div>

        </div>
        <button className={ btnClass + ' float-right' }>
          { buttonTitle }
        </button>
      </div>
    </div>
  )
};

export default School;

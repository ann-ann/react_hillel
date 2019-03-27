import React from 'react';
import School from '../school/school';

const SchoolList = (props) => {

  const { title, studies, showMore, handleLikeDislike } = props;

  return (
   <div className={ props.className }>
     <h3>{ title }</h3>
     {
       studies.map( school => {
          return (<School
            title={school.title}
            src={school.src}
            btnClass={school.btnClass}
            buttonTitle={school.buttonTitle}
            buttonShowDescription={school.buttonShowDescription}
            buttonHideDescription={school.buttonHideDescription}
            description={school.description}
            key={school.id}
            showMore={ showMore }
            isShowLess={ school.isShowLess }
            likes={ school.likes }
            dislikes={ school.dislikes }
            handleLikeDislike={ handleLikeDislike }
          />)
         }

       )
     }
   </div>
  )
};

export default SchoolList;

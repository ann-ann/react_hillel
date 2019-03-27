import logo from './logo.svg';
import u_logo from './u_logo.png';
import school from './school.png';

const constants = {
    studies: [
        {
            id: 1,
            title: 'The School',
            src: school ,
            btnClass: 'btn btn-info',
            buttonTitle:'Start education',
            buttonShowDescription:'Show more',
            buttonHideDescription:'Show less',
            isShowLess: true,
            description:`Шко́ла (от др.-греч. σχολή, σχολά — досуг, учебное занятие, школа) —
                учебное заведение для получения общего образования. В широком смысле слово может применяться к
                названию любого образовательного учреждения (музыкальная школа, художественная школа, спортивная школа
                — ДЮСШ, школа боевых искусств и т. д.`,
            likes: 0,
            dislikes: 0
        },{
            id: 2,
            title: 'The University',
            src: u_logo ,
            btnClass: 'btn btn-success',
            buttonTitle:"Join to us",
            buttonShowDescription:'Show more',
            buttonHideDescription:'Show less',
            isShowLess: true,
            description:`Университе́т (от нем. Universität, которое, в свою очередь, произошло от лат.
                universitas — совокупность, общность) — высшее учебное заведение, где готовятся специалисты по
                фундаментальным и многим прикладным наукам. Как правило, осуществляет и научно-исследовательскую
                работу. Многие современные университеты действуют как учебно-научно-практические комплексы.
                Университеты объединяют в своём составе несколько факультетов, на которых представлена совокупность
                различных дисциплин, составляющих основы научного знания.`,
            likes: 0,
            dislikes: 0
        },
        {
            id: 3,
            title: 'React',
            src: logo ,
            btnClass: 'btn btn-primary',
            buttonTitle: "Learn React",
            buttonShowDescription:'Show more',
            buttonHideDescription:'Show less',
            isShowLess: true,
            description:`React (иногда React.js или ReactJS) — JavaScript-библиотека[4] с открытым исходным
                кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook,
                Instagram и сообществом отдельных разработчиков и корпораций.
                React может использоваться для разработки одностраничных и мобильных приложений.
                Его цель — предоставить высокую скорость, простоту и масштабируемость.
                В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с
                другими библиотеками, такими как Redux.`,
            likes: 0,
            dislikes: 0
        }
    ]
};

export default constants;

export const BASE_URL_MOVIES ='https://api.themoviedb.org/3';


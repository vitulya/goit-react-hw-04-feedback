import css from './Layout.module.css';

export const Layout = ({children}) =>{
    return(
        <div className={css.layout}>{children}</div>
    )
}
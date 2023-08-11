import EmptyPageStyles from '@/styles/_EmptyPage.module.scss';

const EmptyPage = (props) => {
    const {msg} = props;
    return (
        <h1 className={EmptyPageStyles['empty-page']}>{msg}</h1>
    )
}

export default EmptyPage;
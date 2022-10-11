import { toast } from 'react-toastify';
import { SearchbarStyled, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled";
import { BiSearch } from 'react-icons/bi';


const Searchbar = ({onSearch}) => {

    const handleSubmit = (e) => {
        e.preventDefault();        
        const searchValue = e.target.searchValue.value;

        if (searchValue.trim() === "") {
            toast.error("Введите значение поиска!");
            return;
        }
        
        onSearch(searchValue.trim());
    }   

    return (
        <SearchbarStyled>
            <SearchForm autoComplete="false" onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <BiSearch />
                </SearchFormButton>
                <SearchFormInput type="text" name="searchValue" />
            </SearchForm>
        </SearchbarStyled>
    )
}

export default Searchbar;
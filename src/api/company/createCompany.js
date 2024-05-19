import baseApi from '../baseApi';

export const createCompany = async (data) => {
    const form = new FormData();
    form.append('name', data.name);
    form.append('address', data.address);
    form.append('description', data.description);
    form.append('taxCode', data.taxCode);
    form.append('logo', data.logo);
    // form.append('backgroundImage', data.backgroundImage);
    return baseApi('POST', 'company', data);
}
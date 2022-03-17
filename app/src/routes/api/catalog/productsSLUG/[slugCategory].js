import { find, forEach } from "lodash";
import axios from "axios";
export const get = async ({ params }) => {
  const { slugCategory } = params;
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
  };
  const domain = import.meta.env.VITE_API_CRUD;
  const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS

  const urlRubric = `${domain}/get-all-category/`;
  const categories = await axios(urlRubric, { headers });
  let id;
  forEach(categories.data,async function(value) {
    let obj = find(value,{ "slug": slugCategory });
    return id = obj.id
  });

  const url = `${domain}/get-category/${id}`;
  const res = await fetch(url, { headers });
  const products = await res.json();
  return { body: { products, pathAWS} };
};

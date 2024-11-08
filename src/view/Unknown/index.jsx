import './index.scss'
import React, { useState } from 'react';

// Contoh data tabel (misalnya ada 15 data)
const initialData = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  isChecked: false,
}));

const ITEMS_PER_PAGE = 5;

const Unknown = ()=>{
    const [data, setData] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    const [checkAll, setCheckAll] = useState({});
    const [selectedItems, setSelectedItems] = useState([]); // Array untuk item terpilih
  
    const paginatedData = data.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  
    const handleItemCheck = (id) => {
      const isSelected = selectedItems.includes(id);
      const updatedSelectedItems = isSelected
        ? selectedItems.filter((itemId) => itemId !== id)
        : [...selectedItems, id];
      setSelectedItems(updatedSelectedItems);
  
      // Update "check all" status
      const currentPageItems = paginatedData.map((item) => item.id);
      setCheckAll((prevCheckAll) => ({
        ...prevCheckAll,
        [currentPage]: currentPageItems.every((itemId) =>
          updatedSelectedItems.includes(itemId)
        ),
      }));
      console.log("checkAll function handleItemCheck= ")
      console.log(checkAll)
      console.log("selectedItems function handleItemCheck= ")
      console.log(selectedItems)
      console.log("paginatedData function handleItemCheck= ")
      console.log(paginatedData)
    };
  
    const handleCheckAll = () => {
      const currentPageItems = paginatedData.map((item) => item.id);
      const isAllSelected = checkAll[currentPage];
      const updatedSelectedItems = isAllSelected
        ? selectedItems.filter((id) => !currentPageItems.includes(id))
        : [...selectedItems, ...currentPageItems.filter((id) => !selectedItems.includes(id))];
      setSelectedItems(updatedSelectedItems);
      setCheckAll((prevCheckAll) => ({
        ...prevCheckAll,
        [currentPage]: !isAllSelected,
      }));

      console.log("checkAll function handleCheckAll= ")
      console.log(checkAll)
      console.log("selectedItems function handleCheckAll= ")
      console.log(selectedItems)
    };
  
    const changePage = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={checkAll[currentPage] || false}
                  onChange={handleCheckAll}
                />
              </th>
              <th>Item Name</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleItemCheck(item.id)}
                  />
                </td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div>
          {/* Pagination Controls */}
          {Array.from({ length: Math.ceil(data.length / ITEMS_PER_PAGE) }, (_, i) => (
            <button key={i} onClick={() => changePage(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
  
        <div>
          <button onClick={() => console.log("Selected Items:", selectedItems)}>
            Export Selected Items
          </button>
        </div>
      </div>
    );
  };

export default Unknown
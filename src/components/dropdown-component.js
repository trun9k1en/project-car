"use client";

import FormControl from "@mui/material/FormControl/FormControl";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Select from "@mui/material/Select/Select";

export default function DropDownComponent(props) {
  const { data, onChange, value, name } = props;
  console.log("value",value)
  return (
    <FormControl
      sx={{ m: 1, minWidth: 440, backgroundColor: "#FFFFFF" }}
      className="rounded-md mb-4 text-justify"
    >
      <Select
        value={value}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className="h-[40px] rounded-md"
        onChange={onChange}
      >
        <MenuItem value={value} disabled>
          <div className="text-[#B8BAC9] justify-start">{name}</div>
        </MenuItem>
        {data
          ? data.map((m) => (
              <MenuItem value={m}>
                {m.brand ?? m} 
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
}

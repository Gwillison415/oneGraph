import React, { Dispatch, SetStateAction, useState } from "react";
import { TextField, Button } from "@material-ui/core";
type SearchProps = {
setPackageName: Dispatch<SetStateAction<string>>
}
function SearchForm({setPackageName}: SearchProps){
        return (
          <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Button
              color={"primary"}
              //   disabled={disabled !== undefined ? disabled : loading}

              //   onClick={onClick}
              //   type={type}
            ></Button>
          </form>
        );
}
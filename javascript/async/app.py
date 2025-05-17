from typing import Any
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

app = FastAPI()

data:dict[int, dict[str, str|int]] = {
    0: {"id": 0, "name": "John Doe", "drink": "Coffee"},
    1: {"id": 1, "name": "Jane Smith", "drink": "Tea"},
    2: {"id": 2, "name": "Jane Ham", "drink": "Milk"},
}

def get_next_id():
    return (sorted(data)[-1] + 1) if data else 0

@app.get("/api/data")
async def get_data():
    return sorted(list(data.values()), key=lambda x: x["id"])

class RequestData(BaseModel):
    name:str = Field(..., min_length=1)
    drink:str = Field(..., min_length=1)
    
@app.post("/api/data")
async def post_data(req_data:RequestData) -> dict[str, Any]:
    record = req_data.model_dump()
    
    id_ = get_next_id()
    record["id"] = id_
    data[id_] = record
    return record

@app.delete("/api/data/{id_}")
async def delete_data(id_:int) -> dict[str, Any]:
    return data.pop(id_)

@app.put("/api/data/{id_}")
async def put_data(id_:int, req_data:RequestData):

    if id_ not in data:
        error_msg = {
            "message": "The specified item not found.",
            "code": 404
            }
        return JSONResponse(content=error_msg, status_code=404)

    data[id_].update(req_data.model_dump())
    
    return data[id_]


app.mount("/", StaticFiles(directory="static", html=True), name="static")
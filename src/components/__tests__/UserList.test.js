import UserList from '../UserList'

it('GETs data from the server', async () => {
    const response = await fetch("https://reqres.in/api/users/1");
    const result = await response.json();
    let expectedData = {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"};
    expect(result.data).toEqual(expectedData)   
  });

it('Check Delete Item', async()=>{
    const resp = await fetch('https://reqres.in/api/users/1',{
        method: 'DELETE',});
    expect(resp.status).toEqual(204);

});
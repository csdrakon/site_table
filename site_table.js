function addColumn(table_id)
{
  var table_body_obj = document.getElementById(table_id).tBodies[0];
  for (k=0; k < table_body_obj.rows.length -1 ; k++)
    {
      var new_body_cell = table_body_obj.rows[k].insertCell(1);
    }
}

function add_Row(table_id)
{ 
  table_body=document.getElementById(table_id).tBodies[0]; 
      var body=table_body.rows[1].cloneNode(true);    
    table_body.insertBefore(body,table_body.childNodes[2]); 
}

//jQuery o_O
$(document).ready(function(){
$('.table').on('click','#last',function(){
  $('.table tr').find('th').eq(2).before(
  $('.table tr').find('th').eq(2).clone()
    );
  });

$('.table').on('click','.remove_row',function(){
  $(this).parent().remove();
        }
                );
});

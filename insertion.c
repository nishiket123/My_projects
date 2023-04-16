#include<stdio.h>
//---------------Traversal------------------------
void Display(int arr[],int n){
    for(int i=0;i<n; i++){
        printf("%d ",arr[i]);

    }{
        printf("\n");
    }

}
//------------Insertion------------------------
int indarrinsertion(int arr[],int size,int element,int capacity,int index){
    if(size>=capacity){
     return -1;
    }
    for(int i=size-1;i>=index;i--){

        arr[i+1]=arr[i];
        
    }
    arr[index]=element;
       return 1;
}
int main(){
    int index=4;
    int size=5;
    int element=3;
    int capacity=100;
    int arr[100]={7,8,12,27,88};
    Display(arr,5);
    indarrinsertion(arr,size,element,capacity,index);
    size +=1;
    Display(arr,6);

    return 0;
}
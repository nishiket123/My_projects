#include<stdio.h>

void display(int arr[],int n){
for(int i=0;i< n;i++){
    printf("%d ",arr[i]);
    
}
    printf("\n");
}

int inddeletion(int arr[],int size,int index){
    for(int i=index; i<size;i++){
        arr[i]=arr[i+1];
    }
}

int main(){
    int size;
    int arr[100]={11,12,13,14,15};

    display(arr,5);
    inddeletion(arr,5,1);
    size-=1;
    display(arr,5);
    return 0;
}
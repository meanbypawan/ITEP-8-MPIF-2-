class TestMain{
    public static void main(String args[]){
        int arr[][] = {
            {1,2,3,6}, // 0
            {4,5,6,9,1,3}, // 1
            {7,8,9}  // 2
        };

        for(int r=0; r<arr.length; r++){
            for(int c=0; c<arr[r].length; c++){
                System.out.print("  "+arr[r][c]);
            }
            System.out.println();
        }
    }
}
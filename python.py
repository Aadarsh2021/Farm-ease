import os

def list_all_items(folder_path):
    """
    List all directories, subdirectories, and files within the specified folder.
    
    Args:
        folder_path (str): The path of the folder.
        
    Returns:
        list: A list containing names of all directories, subdirectories, and files within the folder.
    """
    all_items = []
    for root, dirs, files in os.walk(folder_path):
        for name in dirs:
            all_items.append(os.path.join(root, name))
        for name in files:
            all_items.append(os.path.join(root, name))
    return all_items

# Example usage:
folder_path = "C:/Users/thaku/OneDrive/Desktop/future/farmease/Project"

all_items = list_all_items(folder_path)
print(all_items)
